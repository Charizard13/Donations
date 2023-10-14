import type { DonationCardProps } from "@/ui";

export const donationsCards: DonationCardProps[] = [
  {
    id: "1",
    title: "ערכת הסבה לגלוק 19 או רמון",
    description: `דרוש השלמה ל 2 מתנדבי פעולות איבה שלחמו בשדרות עם אקדח ללא ערכה כזאת מאחר ולמדינה יש חוסרים 
      בחנויות זה קיים במחיר מופקע לעומת לפני חודש
      עלה 800 עלה ל 1500 ליח׳
      `,
    date: "14/10/2023",
    price: 3000,
    image: "https://klvoddikzmytpbewxsir.supabase.co/storage/v1/object/public/donations/1.jpeg?t=2023-10-14T15%3A55%3A04.407Z",
    paymentLink: "https://www.paypal.com/il/home",
  },
  {
    id: "2",
    date: "14/10/2023",
    title: "16 ווסטים עם מגן קרמי",
    price: 20000,
    description: "מחלקה שנמצאת בחזית עם וסטים ישנים וללא מגנים קרמיים, כל עזרה בהשגת וסטים חדשים אבל הכי חשוב קרמי ל16 חיילים במחלקה יעזור מאוד",
    image: "https://klvoddikzmytpbewxsir.supabase.co/storage/v1/object/public/donations/3.jpeg?t=2023-10-14T15%3A59%3A16.490Z",
    paymentLink: "https://www.paypal.com/il/home",
  },
];

export const helpWhatsappLink = "https://wa.me/972525830613";
