import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export interface StudentScore {
    registration_number: string;
    math: number | null;
    literature: number | null;
    english: number | null;
    physics: number | null;
    chemistry: number | null;
    biology: number | null;
    history: number | null;
    geography: number | null;
    civic_education: number | null;
    language_code: string;
}

export interface SubjectStatistics {
    subject: string;
    levels: {
        excellent: number; // >=8
        good: number; // 6-8
        average: number; // 4-6
        poor: number; // <4
    };
}

export interface TopStudent {
    registration_number: string;
    math: number;
    physics: number;
    chemistry: number;
    total_score: number;
}

export const searchStudentScores = async (
    registrationNumber: string
): Promise<StudentScore> => {
    const response = await api.get(`/students/search/${registrationNumber}`);
    return response.data;
};

export const getScoreStatistics = async (): Promise<SubjectStatistics[]> => {
    const response = await api.get("/students/statistics");
    return response.data;
};

export const getTopGroupA = async (): Promise<TopStudent[]> => {
    const response = await api.get("/students/top_group_a");
    return response.data;
};
