import { dataAboutPage } from "@/utils/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-gray-200">
            <div className="w-full max-w-3xl mx-auto py-10">
                {dataAboutPage.map((data) => (
                    <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                        <h3 className="mb-2 text-2xl font-bold text-gray-800">{data.title}</h3>
                        <div className="flex flex-col sm:flex-row items-start mb-4 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-[1px] before:bg-gray-300 before:translate-y-3">
                            <time className="sm:absolute left-0 inline-flex items-center justify-center w-20 h-6 text-xs font-semibold text-emerald-600 uppercase bg-emerald-100 rounded-full sm:translate-x-[-50%] sm:translate-y-1">
                                {data.date}
                            </time>
                            <p className="mt-1 text-xl font-medium text-gray-500 sm:ml-8">{data.subtitle}</p>
                        </div>
                        <p className="text-gray-100 sm:ml-8">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;
