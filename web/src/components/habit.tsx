interface HabitPros {
    completed?: number
}

export function Habit(props: HabitPros) {
    return (
        <div className="bg-zinc-900 w-10 text-white">{props.completed}</div>
    )
}