// components/ScheduleSection.jsx

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const times = [
  "9:00 – 10:00",
  "10:00 – 11:00",
  "11:00 – 12:00",
  "12:00 – 13:00",
  "13:00 – 14:00",
  "14:00 – 15:00",
  "15:00 – 16:00",
  "16:00 – 17:00",
  "17:00 – 18:00",
  "18:00 – 19:00",
  "19:00 – 20:00",
];

// Что в какой ячейке
const schedule = {
  "9:00 – 10:00": {
    Monday: { title: "Powerlifting", coach: "Albert Fincher" },
    Thursday: { title: "Gym", coach: "Anna Bauman" },
  },
  "11:00 – 12:00": {
    Thursday: { title: "Fat Burning", coach: "Darian Philips" },
    Saturday: { title: "Gym", coach: "Anna Bauman" },
  },
  "12:00 – 13:00": {
    Thursday: { title: "Gym", coach: "Anna Bauman" },
    Friday: { title: "Powerlifting", coach: "Albert Fincher" },
  },
  "14:00 – 15:00": {
    Monday: { title: "Fat Burning", coach: "Darian Philips" },
    Friday: { title: "Powerlifting", coach: "Albert Fincher" },
  },
  "16:00 – 17:00": {
    Wednesday: { title: "Fat Burning", coach: "Darian Philips" },
    Friday: { title: "Gym", coach: "Anna Bauman" },
  },
  "17:00 – 18:00": {
    Monday: { title: "Gym", coach: "Anna Bauman" },
    Sunday: { title: "Fat Burning", coach: "Darian Philips" },
  },
  "19:00 – 20:00": {
    Friday: { title: "Powerlifting", coach: "Albert Fincher" },
  },
};

export default function ScheduleSection() {
  return (
    <section className="bg-[#0F0F0F] py-20 px-4">
      {/* Заголовок */}
      <div className="text-center mb-10">
        <p className="uppercase text-[#D7FB00] tracking-[0.3em] text-xs mb-3">
          Time to fitness
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold">
          Classes Schedule
        </h2>
      </div>

      {/* Таблица */}
      <div className="w-[90%] mx-auto rounded-[2.5rem] overflow-hidden border border-[#2A2A2A] bg-[#101010] text-white">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr>
              {/* левый верхний угол с иконкой времени */}
              <th className="w-28 md:w-40 h-13 border border-[#2A2A2A] bg-[#181818] text-center align-middle">
                <span className="text-xl">🕒</span>
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="h-16 border border-[#2A2A2A] bg-[#181818] text-center font-semibold"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {times.map((time) => (
              <tr key={time}>
                {/* колонка со временем */}
                <td className="border border-[#2A2A2A] bg-[#181818] text-gray-400 px-4 text-right pr-6">
                  {time}
                </td>

                {/* ячейки по дням */}
                {days.map((day) => {
                  const cell = schedule[time]?.[day];
                  const isActive = Boolean(cell);

                  return (
                    <td
                      key={day}
                      className={`border border-[#2A2A2A] px-4 ${
                        isActive ? "bg-black" : "bg-[#151515]"
                      }`}
                    >
                      {isActive && (
                        <div className="flex flex-col justify-center h-full py-4">
                          <span className="font-semibold text-white">
                            {cell.title}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {cell.coach}
                          </span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
