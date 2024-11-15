import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
    const { id, title, image, urlGithub, urlDemo } = data;

    return (
        <div
            key={id}
            className="p-4 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 grid gap-4 justify-between"
        >
            <h3 className="mb-4 text-md font-semibold text-gray-200 h-auto text-center mx-auto">{title}</h3>
            <Image
                src={image}
                alt={`${title} image`}
                width={200}
                height={200}
                className="w-full md:w-[200px] h-auto rounded-2xl"
            />
            <div className="flex gap-4 mt-4 text-center align-center justify-center my-auto">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                    Github
                </Link>
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="px-3 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondary/80"
                >
                    Live Demo
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;
