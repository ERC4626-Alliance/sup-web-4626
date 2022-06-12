import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { BsCalendar2DateFill } from "react-icons/bs";
import { linksResources } from "../config/data";

export default function News() {
  return (<div className="bg-gradient-to-r from-pink-700 to-pink-900 py-16 w-full text-center" id="news">
    <Container>
      <AtomTitle alignText="center" inverted={true}>ERC-4626 News</AtomTitle>
      <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 lg:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
        {linksResources.news.map((item: any, index: number) => <>
          <a
            key={`news-${index}`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white shadow-md rounded-xl px-5 pt-5 pb-10 block relative group md:hover:opacity-90 transition-opacity delay-75 ease-linear">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img className="object-scale-down group-hover:opacity-70 max-h-30 "
                   src={item.thumbnail} alt={item.title} />
            </div>
            <div className="inline-flex items-center px-3 rounded-full text-sm font-medium bg-pink-100 text-pink-800 whitespace-nowrap py-0.5 mt-3">
              <BsCalendar2DateFill className="w-4 h-4 mr-1" />
              {item.date}
            </div>
            <h4
              className="my-4 text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text text-transparent capitalize">
              {item.name}
            </h4>
            <p className="text-base text-gray-600 font-pj">{item.teaser}</p>
          </a>
        </>)}
      </div>
    </Container>
  </div>);
}
