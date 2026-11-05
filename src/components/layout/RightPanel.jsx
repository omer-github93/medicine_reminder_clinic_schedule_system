import React from 'react';
import { ClinicHeroBuilding } from '../../assets/illustrations/ClinicHeroBuilding';
import { SchedulePanel } from '../dashboard/SchedulePanel';

export const RightPanel = ({
  days,
  activeDayId,
  onSelectDay,
  slots,
  onAddSchedule
}) => {
  return (
    <aside className="w-full lg:w-[280px] xl:w-[310px] flex-shrink-0 flex flex-col rounded-[28px] overflow-hidden bg-[#121924] shadow-card">
      {/* Top Clinic Building Landscape */}
      <div className="relative">
        <ClinicHeroBuilding className="w-full" />
      </div>

      {/* Bottom Schedule Timetable */}
      <div className="flex-1 flex flex-col">
        <SchedulePanel
          days={days}
          activeDayId={activeDayId}
          onSelectDay={onSelectDay}
          slots={slots}
          onAddSchedule={onAddSchedule}
        />
      </div>
    </aside>
  );
};

