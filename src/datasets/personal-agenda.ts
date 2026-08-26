import type { SchedulerEvent, SchedulerResource } from '@mui/x-scheduler/models';

export const resources: SchedulerResource[] = [
  {
    id: 'res-keuangan',
    title: 'Keuangan & Perpajakan',
    eventColor: 'teal',
  },
  {
    id: 'res-bisnis',
    title: 'Bisnis & Manajemen',
    eventColor: 'purple',
  },
  {
    id: 'res-it',
    title: 'Teknologi Informasi (IT)',
    eventColor: 'blue',
  },
  {
    id: 'res-hukum',
    title: 'Hukum & Kepatuhan',
    eventColor: 'amber',
  },
  {
    id: 'res-lingkungan',
    title: 'Lingkungan & Sustainability',
    eventColor: 'green',
  },
  {
    id: 'res-sdm',
    title: 'Pendidikan & Pengembangan SDM',
    eventColor: 'orange',
  },
];

export const defaultVisibleDate = new Date('2026-08-24T00:00:00');

export const initialEvents: SchedulerEvent[] = [
  {
    id: 'event-1',
    title: 'Pelatihan Perpajakan Brevet A & B Integrated',
    description: 'Pelatihan intensif perpajakan komprehensif batch Agustus 2026.',
    start: '2026-08-24T09:00:00',
    end: '2026-08-24T16:00:00',
    resource: 'res-keuangan',
  },
  {
    id: 'event-2',
    title: 'Digital Marketing Strategy & Growth Hacking',
    description: 'Masterclass strategi pemasaran digital dan akselerasi bisnis.',
    start: '2026-08-25T08:30:00',
    end: '2026-08-25T15:00:00',
    resource: 'res-bisnis',
  },
  {
    id: 'event-3',
    title: 'Cybersecurity Awareness & Data Protection (UU PDP)',
    description: 'Workshop keamanan siber dan perlindungan data korporat.',
    start: '2026-08-26T10:00:00',
    end: '2026-08-26T15:30:00',
    resource: 'res-it',
  },
  {
    id: 'event-4',
    title: 'Hukum Kontrak Bisnis & Legal Drafting Masterclass',
    description: 'Penyusunan draf kontrak bisnis komersial sesuai regulasi terbaru.',
    start: '2026-08-27T09:00:00',
    end: '2026-08-27T16:30:00',
    resource: 'res-hukum',
  },
  {
    id: 'event-5',
    title: 'Pengelolaan Limbah B3 & Audit Lingkungan ISO 14001',
    description: 'Implementasi pengelolaan limbah industri terpadu dan audit keberlanjutan.',
    start: '2026-08-28T09:00:00',
    end: '2026-08-28T16:00:00',
    resource: 'res-lingkungan',
  },
  {
    id: 'event-6',
    title: 'Leadership & Talent Development Program (KPI & OKR)',
    description: 'Program akselerasi kepemimpinan dan manajemen performa tim.',
    start: '2026-08-29T09:00:00',
    end: '2026-08-29T16:00:00',
    resource: 'res-sdm',
  },
  {
    id: 'event-7',
    title: 'Fullstack Web Development & Cloud Architecture',
    description: 'Hands-on live coding React, Node.js, dan DevOps.',
    start: '2026-08-30T13:00:00',
    end: '2026-08-30T17:00:00',
    resource: 'res-it',
  },
  {
    id: 'event-8',
    title: 'Manajemen Risiko Perbankan & Kepatuhan Regulasi OJK',
    description: 'Sosialisasi framework manajemen risiko terintegrasi.',
    start: '2026-08-31T09:00:00',
    end: '2026-08-31T15:00:00',
    resource: 'res-keuangan',
  },
  {
    id: 'event-9',
    title: 'Sertifikasi Sistem Manajemen Energi ISO 50001',
    description: 'Efisiensi energi industri dan audit sistem keberlanjutan.',
    start: '2026-09-01T09:00:00',
    end: '2026-09-01T16:30:00',
    resource: 'res-lingkungan',
  },
];
