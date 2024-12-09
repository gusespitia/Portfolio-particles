import { dataAboutPage } from "@/utils/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-gray-200">
            <div className="w-full max-w-3xl mx-auto py-10 xs:py-8">
                {dataAboutPage.map((data) => (
                    <div key={data.id} className="relative py-6 pl-8 xs:pl-20 group">
                        <h3 className="text-left mb-2 text-2xl font-bold text-gray-300 xs:text-xl  ">{data.title}</h3>
                        <div className="flex flex-col xs:flex-row items-start mb-4 group-last:before:hidden before:absolute before:left-2 xs:before:left-6 before:h-full before:w-[1px] before:bg-gray-300 before:translate-y-3">
                            <time className="xs:absolute left-0 inline-flex items-center justify-center w-20 h-5 text-xs font-semibold text-emerald-600 uppercase bg-emerald-100 rounded-full xs:translate-x-[-15%] xs:translate-y-1">
                                {data.date}
                            </time>
                            <p className="mt-1 text-xl font-medium text-gray-400 xs:ml-0 xs:text-lg text-left xs:text-center">{data.subtitle}</p>
                        </div>
                        <p className="text-gray-200 xs:ml-0 xs:text-sm ">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;
