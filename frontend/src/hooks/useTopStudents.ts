import { useState, useEffect, useMemo } from "react";
import { getTopGroupA, type TopStudent } from "../api/studentsApi";

interface UseTopStudents {
    students: TopStudent[];
    loading: boolean;
    error: string;
}

export const useTopStudents = (): UseTopStudents => {
    const [students, setStudents] = useState<TopStudent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const api = useMemo(
        () => ({
            fetchTopStudents: async (signal: AbortSignal) => {
                try {
                    const data = await getTopGroupA();
                    if (!signal.aborted) {
                        setStudents(data);
                        setError("");
                    }
                } catch {
                    if (!signal.aborted) {
                        setError("Failed to load top students");
                    }
                } finally {
                    if (!signal.aborted) {
                        setLoading(false);
                    }
                }
            },
        }),
        []
    );

    useEffect(() => {
        const abortController = new AbortController();
        api.fetchTopStudents(abortController.signal);
        return () => abortController.abort();
    }, [api]);

    return { students, loading, error };
};
