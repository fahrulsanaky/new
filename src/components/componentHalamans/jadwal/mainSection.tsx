import * as React from 'react';
import type { SchedulerEvent, EventCalendarLocaleText } from '@mui/x-scheduler/models';
import { EventCalendar } from '@mui/x-scheduler/event-calendar';
import { id } from 'date-fns/locale';
import {
  initialEvents,
  defaultVisibleDate,
  resources,
} from '../../datasets/personal-agenda';

const indonesianLocaleText: Partial<EventCalendarLocaleText> = {
  resourcesLabel: 'Kategori',
  today: 'Hari Ini',
  agenda: 'Agenda',
  month: 'Bulan',
  day: 'Hari',
  week: 'Minggu',
  time: 'Waktu',
  allDay: 'Sepanjang Hari',
  days: 'Hari',
  months: 'Bulan',
  weeks: 'Minggu',
  years: 'Tahun',
  other: 'Lainnya',
  closeSidePanel: 'Tutup panel samping',
  openSidePanel: 'Buka panel samping',
  openMenu: 'Buka menu',
  previousTimeSpan: (view) => (view === 'month' ? 'Bulan sebelumnya' : 'Sebelumnya'),
  nextTimeSpan: (view) => (view === 'month' ? 'Bulan berikutnya' : 'Berikutnya'),
  hiddenEvents: (hiddenCount) => `+${hiddenCount} lainnya`,
  deleteEvent: 'Hapus Kegiatan',
  saveChanges: 'Simpan Perubahan',
  cancel: 'Batal',
  confirm: 'Konfirmasi',
  title: 'Judul Kegiatan',
  descriptionLabel: 'Deskripsi',
  startDateLabel: 'Tanggal Mulai',
  endDateLabel: 'Tanggal Selesai',
  startTimeLabel: 'Waktu Mulai',
  endTimeLabel: 'Waktu Selesai',
  resourceLabel: 'Kategori',
  labelNoResource: 'Tanpa Kategori',
  colorPickerLabel: 'Pilih Warna',
  generalTabLabel: 'Umum',
  editEventButtonAriaLabel: 'Edit kegiatan',
  deleteEventButtonAriaLabel: 'Hapus kegiatan',
  closeButtonLabel: 'Tutup',
  closeButtonAriaLabel: 'Tutup',
};

export default function MainSection() {
  const [events, setEvents] = React.useState<SchedulerEvent[]>(initialEvents);

  return (
    <section id="mainSection" className="w-full h-auto bg-white py-12 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-7xl" style={{ height: '680px', width: '100%' }}>
        <EventCalendar
          events={events}
          resources={resources}
          defaultVisibleDate={defaultVisibleDate}
          onEventsChange={setEvents}
          readOnly
          areEventsDraggable={false}
          areEventsResizable={false}
          eventCreation={false}
          views={['month', 'agenda']}
          defaultView="agenda"
          dateLocale={id}
          localeText={indonesianLocaleText}
          preferencesMenuConfig={false}
          defaultPreferences={{
            isSidePanelOpen: true,
            ampm: false,
            showWeekends: false,
            showWeekNumber: false,
            showEmptyDaysInAgenda: false,
          }}
          sx={{
            '& .MuiEventCalendar-miniCalendar': {
              display: 'none !important',
            },
            '& .MuiEventCalendar-sidePanelDivider': {
              display: 'none !important',
            },
            '& .MuiEventCalendar-sidePanel': {
              paddingTop: '16px',
            },
            '& .MuiEventCalendar-preferencesMenu': {
              display: 'none !important',
            },
            '& [id*="-preferences-menu"]': {
              display: 'none !important',
            },
          }}
        />
      </div>
    </section>
  );
}
