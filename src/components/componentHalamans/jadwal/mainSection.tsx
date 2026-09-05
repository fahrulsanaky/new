import * as React from 'react';
import type { SchedulerEvent, EventCalendarLocaleText } from '@mui/x-scheduler/models';
import { EventCalendar } from '@mui/x-scheduler/event-calendar';
import { id } from 'date-fns/locale';
import {
  initialEvents,
  defaultVisibleDate,
  resources,
} from '../../../data/personal-agenda';

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
  const [visibleResources, setVisibleResources] = React.useState<Record<string, boolean>>({
    'res-keuangan': true,
    'res-bisnis': true,
    'res-it': true,
    'res-hukum': true,
    'res-lingkungan': true,
    'res-sdm': true,
  });

  const handleVisibleResourcesChange = (newVisibleResources: Record<string, boolean>) => {
    // Pastikan tidak semua opsi di-uncheck (minimal tersisa 1 opsi aktif agar tidak terjadi error/kosong tanpa batas)
    const hasAnyActive = Object.values(newVisibleResources).some((val) => val === true);
    if (!hasAnyActive) {
      return;
    }
    setVisibleResources(newVisibleResources);
  };

  return (
    <section id="mainSection" className="w-full h-auto bg-white py-12 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-7xl" style={{ height: '680px', width: '100%' }}>
        <EventCalendar
          events={events}
          resources={resources}
          visibleResources={visibleResources}
          onVisibleResourcesChange={handleVisibleResourcesChange}
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
            showWeekends: true,
            showWeekNumber: false,
            showEmptyDaysInAgenda: false,
          }}
          sx={{
            fontFamily: 'Poppins, sans-serif',
            '& header p': {
              fontFamily: 'Poppins, sans-serif !important',
              fontWeight: 'normal !important',
              fontSize: '18px !important',
              lineHeight: '27px !important',
            },
            '& header button': {
              fontFamily: 'Nunito, sans-serif !important',
              fontSize: '12px !important',
              lineHeight: '19.5px !important',
              color: '#022859 !important',
            },
            '& [id*="-view-switcher-button"], & button[id*="view-switcher"]': {
              color: '#022859 !important',
              fontFamily: 'Nunito, sans-serif !important',
              fontSize: '12px !important',
              lineHeight: '19.5px !important',
            },
            '& .MuiEventCalendar-sidePanel, & aside': {
              borderRadius: '16px !important',
              paddingTop: '16px',
              fontFamily: 'Poppins, sans-serif !important',
            },
            '& .MuiEventCalendar-sidePanel *': {
              fontFamily: 'Poppins, sans-serif !important',
            },
            '& .MuiEventCalendar-agendaView, & .MuiEventCalendar-monthView, & section > div': {
              borderRadius: '16px !important',
              fontFamily: 'Poppins, sans-serif !important',
            },
            '& section, & section *': {
              fontFamily: 'Poppins, sans-serif !important',
            },
            '& .MuiEventCalendar-miniCalendar': {
              display: 'none !important',
            },
            '& .MuiEventCalendar-sidePanelDivider': {
              display: 'none !important',
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
