export interface PrivacyPolicy {
  last_update: string;
  texts: [
    {
      title: string;
      text: string;
    },
    {
      title: string;
      text1: string;
      text2: string;
    }
  ]
}
