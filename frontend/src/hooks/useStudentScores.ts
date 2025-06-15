import { useState } from "react";
import { searchStudentScores, type StudentScore } from "../api/studentsApi";

interface UseStudentScores {
    student: StudentScore | null;
    loading: boolean;
    error: string;
    searchScores: (registrationNumber: string) => Promise<void>;
}

export const useStudentScores = (): UseStudentScores => {
    const [student, setStudent] = useState<StudentScore | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const searchScores = async (registrationNumber: string) => {
        if (!registrationNumber.trim()) {
            setError("Please enter a registration number");
            return;
        }

        setLoading(true);
        setError("");
        try {
            const data = await searchStudentScores(registrationNumber);
            setStudent(data);
        } catch {
            setError("Student not found or an error occurred");
            setStudent(null);
        } finally {
            setLoading(false);
        }
    };

    return { student, loading, error, searchScores };
};
