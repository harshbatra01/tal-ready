import companiesData from '@/mock-data/companies.json';
import questionsData from '@/mock-data/questions.json';
import sessionResultData from '@/mock-data/session-result.json';
import userData from '@/mock-data/user.json';
import type { Company, Question, SessionResult, User } from '@/types/data';

export const getCompanies = (): Company[] => companiesData as Company[];

export const getQuestions = (): Question[] => questionsData as Question[];

export const getSessionResult = (): SessionResult => sessionResultData as SessionResult;

export const getUser = (): User => userData as User;

export const getCompanyById = (id: string): Company | undefined =>
  getCompanies().find((c) => c.id === id);
