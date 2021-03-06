export interface CardProps {
  data: {
    statSubtitle: string,
    statTitle: string,
    statArrow: string,
    statPercent: string,
    statPercentColor: string,
    statDescription: string,
    statIconName: string,
    statIconColor: string
  }
}

export function Card({ data }: CardProps) {
  return (
    <>
      <div className="cardHolder relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {data.statSubtitle}
              </h5>
              <span className="trafficTotal font-semibold text-xl text-blueGray-700">
                {data.statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  data.statIconColor
                }
              >
                <i className={data.statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={data.statPercentColor + " mr-2"}>
              <i
                className={
                  data.statArrow === "up"
                    ? "fas fa-arrow-up"
                    : data.statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {data.statPercent}%
            </span>
            <span className="whitespace-nowrap">{data.statDescription}</span>
          </p>
        </div>
      </div>
    </>
  );
}


export default Card;
