import { Todolist } from "@/components/todolist";

export default function exercise() {
  return (
    <div className="bg-[#1C202C] w-[100%] h-[100vh]">
      <section className="h-[65%]">
        <div>
          <h1 className="text-3xl font-bold text-white justify-center align-middle text-center pb-7 pt-14">
            Chores ToDo List
          </h1>
        </div>
        <div id="todo-list" className="flex flex-col items-center"></div>
      </section>

      <hr className="w-[100%] text-black border-solid" />

      <section className="h-1/4">
        <div>
          <h1
            id="task-done-count"
            data-count="0"
            className="text-3xl font-bold text-white justify-center align-middle text-center pt-7 pb-10"
          >
            Task Done : 0
          </h1>
        </div>
        <div>
          <Todolist />
        </div>
      </section>
    </div>
  );
}
