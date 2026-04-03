export interface Company {
  id: string;
  name: string;
  logoUrl: string;
}

export type QuestionStatus = 'ready' | 'locked';

export interface Question {
  id: string;
  companyId: string;
  status: QuestionStatus;
  questionText: string;
  completedUsers: number;
  durationMins: number;
}

export type KeyMomentType = 'positive' | 'negative';

export interface KeyMoment {
  timestamp: string;
  description: string;
  type: KeyMomentType;
}

export interface SmartSummary {
  whatWorkedWell: string[];
  overallTakeaways: string[];
}

export interface SessionResult {
  questionId: string;
  questionText: string;
  companyName: string;
  companyLogoUrl: string;
  smartSummary: SmartSummary;
  keyMoments: KeyMoment[];
  audioDurationSeconds: number;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  memberSince: string;
  isPremium: boolean;
}
