import { Control, Controller } from 'react-hook-form';
import { PutPostTodoReq } from '@/models/studyRoomTodos.model';
import * as S from './RepeatDaySelector.style';

export default function RepeatDaysSelector({
  control,
}: {
  control: Control<PutPostTodoReq>;
}) {
  return (
    <S.DaySelectWrapper>
      {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
        <div key={day}>
          <Controller
            control={control}
            name="repeatDays"
            render={({ field }) => (
              <>
                <S.DaySelectInput
                  id={day}
                  type="checkbox"
                  value={getDayLabel(day)}
                  checked={field.value?.includes(getDayLabel(day)) ?? false}
                  onChange={(e) => {
                    const value = e.target.value;
                    const newValue = e.target.checked
                      ? [...(field.value ?? []), value]
                      : (field.value ?? []).filter((d) => d !== value);
                    field.onChange(newValue);
                  }}
                />
                <label htmlFor={day}>{getDayLabel(day)}</label>
              </>
            )}
          />
        </div>
      ))}
    </S.DaySelectWrapper>
  );
}
const getDayLabel = (day: string) => {
  switch (day) {
    case 'mon':
      return '월';
    case 'tue':
      return '화';
    case 'wed':
      return '수';
    case 'thu':
      return '목';
    case 'fri':
      return '금';
    case 'sat':
      return '토';
    case 'sun':
      return '일';
    default:
      return '';
  }
};
