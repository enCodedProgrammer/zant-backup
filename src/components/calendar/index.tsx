export default function MyCalendar() {
	return (
		<div className="px-4 py-4 bg-white rounded-xl border-2 border-gray-50 h-[440px] ">
			<h1 className=" text-[1.5rem] font-semibold mb-4">Monthly Calendar</h1>
			<div className="flex justify-between items-center">
				<div className="font-medium text-[1rem]">January 2024</div>
				<div className="flex items-center gap-6 text-2xl font-bold">
					<button>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
						</svg>
					</button>
					<button>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
						</svg>
					</button>
				</div>
			</div>
			<div className="bg-gray-200 w-full my-4 h-[2px]"></div>
			<div className="grid grid-cols-7 gap-2 font-roboto font-normal  ">
				<div className="text-center text-[0.875rem]">Sun</div>
				<div className="text-center text-[0.875rem]">Mon</div>
				<div className="text-center text-[0.875rem]">Tue</div>
				<div className="text-center text-[0.875rem]">Wed</div>
				<div className="text-center text-[0.875rem]">Thu</div>
				<div className="text-center text-[0.875rem]">Fri</div>
				<div className="text-center text-[0.875rem]">Sat</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					1
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					2
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					3
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					4
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					5
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					6
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					7
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					8
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					9
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					10
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					11
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					12
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					13
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					14
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					15
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					16
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					17
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					18
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					19
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					20
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					21
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					22
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					23
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					24
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  bg-secondary text-white">
					25
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					26
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					27
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					28
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					29
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200  ">
					30
				</div>
				<div className="text-sm text-center font-roboto text-[1.125rem]  px-3 h-10 ml-[7px] w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200 bg-secondary text-white ">
					31
				</div>
			</div>
		</div>
	)
}
