import {
  RiBarChartLine,
  RiDashboardLine,
  RiFileList3Line,
  RiNotification3Line,
  RiSettings3Line,
} from "@remixicon/react";
import { invoices } from "./mock-data";

export const appSidebarItems = [
  {
    id: 1,
    Icon: RiDashboardLine,
    label: "Dashboard",
    href: "/",
  },
  {
    id: 2,
    Icon: RiBarChartLine,
    label: "Analytics",
    href: "/analytics",
  },
  {
    id: 3,
    Icon: RiFileList3Line,
    label: "Invoices",
    href: "/invoices",
  },
  {
    id: 4,
    Icon: RiNotification3Line,
    label: "Notifications",
    href: "/notifications",
  },
  {
    id: 5,
    Icon: RiSettings3Line,
    label: "Settings",
    href: "/settings",
  },
];

export const topCountries = [
  { country: "United States", visitors: 84200, pct: 100 },
  { country: "United Kingdom", visitors: 31400, pct: 37 },
  { country: "Germany", visitors: 22100, pct: 26 },
  { country: "Canada", visitors: 18700, pct: 22 },
  { country: "Australia", visitors: 14300, pct: 17 },
];

const totalRevenue = invoices
  .filter((i) => i.status === "paid")
  .reduce((s, i) => s + i.amount, 0);

const totalPending = invoices
  .filter((i) => i.status === "pending")
  .reduce((s, i) => s + i.amount, 0);
const totalOverdue = invoices
  .filter((i) => i.status === "overdue")
  .reduce((s, i) => s + i.amount, 0);

export const summeryCardsItems = [
  {
    label: "Total Collected",
    value: `$${totalPending.toLocaleString()}`,
    color: "text-emerald-600",
  },
  {
    label: "Pending",
    value: `$${totalRevenue.toLocaleString()}`,
    color: "text-amber-600",
  },
  {
    label: "Overdue",
    value: `$${totalOverdue.toLocaleString()}`,
    color: "text-red-500",
  },
];

export const settingsItems = [
  {
    id: "first",
    label: "First name",
    value: "Edward",
  },
  {
    id: "last",
    label: "Last name",
    value: "Pembroke",
  },
  {
    id: "email",
    label: "Email",
    value: "edward@example.com",
  },
  {
    id: "company",
    label: "Company",
    value: "Acme Inc.",
  },
];