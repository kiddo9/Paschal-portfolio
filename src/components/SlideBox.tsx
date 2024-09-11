import { cn } from "../../@/lib/utils";
import Marquee from "../../@/components/magicui/marquee";

const reviews = [
  {
    id: 1,
    name: 'Luxary Hotel. Developed with Reactjs and Tailwinds',
    img: '/luxuray.png',
    link: 'https://hotel-booking-ecru.vercel.app/'
},
{
    id: 2,
    name: 'Resturant. Developed with Reactjs and Tailwinds',
    img: '/Resturant.png',
    link: 'https://restaurant-chi-two.vercel.app/'
},
{
    id: 3,
    name: 'Marina Havan. Developed with Reactjs and Tailwinds',
    img: '/hotel.png',
    link: 'https://m-hotel-beryl.vercel.app/'
},
{
    id: 4,
    name: 'School project. Developed with Reactjs and Tailwinds',
    img: '/iuo.png',
    link: 'https://form-project-eight.vercel.app/'
},
{
  id: 4,
  name: 'full stack Laravel(PHP) E-commerce project. Developed with Laravel, php, Tailwinds, and javascript',
  img: '/lara.jpg',
  link: 'http://paschalecomm2.000.pe'
}
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ThirdRow = reviews.slice(0, reviews.length / 2);
const FouthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  link,
  body,
}: {
  img: string;
  name: string;
  link: string;
  body: string;
}) => {
  return (
   <>
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <a href={link} className="flex flex-row items-center gap-2">
        <img className="w-24 h-24 rounded" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </a>
    </figure>
   </>
  );
};
 function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {ThirdRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {FouthRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}


export default MarqueeDemo