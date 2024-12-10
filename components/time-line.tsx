import { dataAboutPage } from "@/utils/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-gray-200">
            <div className="mx-auto py-10 xs:py-8 w-full max-w-3xl">
                {dataAboutPage.map((data) => (
                    <div key={data.id} className="relative py-6 pl-8 xs:pl-20 group">
                        <h3 className="mb-2 font-bold text-2xl text-gray-300 text-left xs:text-xl">{data.title}</h3>
                        <div className="before:left-2 xs:before:left-6 before:absolute flex xs:flex-row flex-col items-start group-last:before:hidden before:bg-gray-300 mb-4 before:w-[2px] before:h-full before:translate-y-3">
                            <time className="inline-flex left-0 xs:absolute justify-center items-center bg-emerald-100 rounded-full w-20 h-5 font-semibold text-emerald-600 text-xs uppercase xs:translate-x-[-15%] xs:translate-y-1">
                                {data.date}
                            </time>
                            <p className="mt-1 xs:ml-0 font-medium text-gray-400 text-left text-xl xs:text-center xs:text-lg">{data.subtitle}</p>
                        </div>
                        <p className="xs:-ml-8 text-gray-200 xs:text-sm">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;
