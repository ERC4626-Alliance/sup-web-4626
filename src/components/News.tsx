import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { BsCalendar2DateFill } from "react-icons/bs";
import { linksResources } from "../config/data";

export default function News() {
  return (
    <div
      className="w-full bg-gradient-to-r from-pink-700 to-pink-900 py-16"
      id="news"
    >
      <Container>
        <AtomTitle alignText="center" inverted={true}>
          ERC-4626 News
        </AtomTitle>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 sm:text-left md:grid-cols-2 md:gap-y-4">
          {linksResources.news.map((item: any, index: number) => (
            <a
              key={`news-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl bg-white p-5 shadow-md transition-opacity delay-75 ease-linear md:hover:opacity-90"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  className="max-h-30 object-scale-down"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="my-3 inline-flex items-center whitespace-nowrap rounded-full py-0.5 text-sm font-medium text-pink-800 md:bg-pink-100 md:px-3">
                <BsCalendar2DateFill className="mr-1 h-4 w-4" />
                {item.date}
              </div>
              <h4 className="bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent md:my-4">
                {item.name}
              </h4>
              <p className="font-pj text-base text-gray-600">{item.teaser}</p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
