import { useState, useEffect, useMemo } from "react";
import { getScoreStatistics, type SubjectStatistics } from "../api/studentsApi";

interface UseScoreStatistics {
    stats: SubjectStatistics[];
    loading: boolean;
    error: string;
}

export const useScoreStatistics = (): UseScoreStatistics => {
    const [stats, setStats] = useState<SubjectStatistics[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const api = useMemo(
        () => ({
            fetchStatistics: async (signal: AbortSignal) => {
                try {
                    const data = await getScoreStatistics();
                    if (!signal.aborted) {
                        setStats(data);
                        setError("");
                    }
                } catch {
                    if (!signal.aborted) {
                        setError("Failed to load statistics");
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
        api.fetchStatistics(abortController.signal);
        return () => abortController.abort();
    }, [api]);

    return { stats, loading, error };
};
