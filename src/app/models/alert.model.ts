export interface Alert {
    id: string;
    dateTime: Date;
    severity: string;
    description: string;
    status: string;
    additionalInfo?: string;
  }
  