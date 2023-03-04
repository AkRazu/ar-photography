import React from "react";

const RecentWeddings = () => {
  return (
    <div className="bg-base-200 lg:py-10">
      <div className="flex justify-center py-4">
        <div>
          <p className="text-sm tracking-widest text-primary">PORTFOLIO</p>
          <h1 className="text-4xl font-normal head">Recent Weddings</h1>
          <hr className="border-primary mx-auto w-3/5 my-3 " />
        </div>
      </div>

      <div className="py-5">
        <div className="grid w-5/6 lg:w-3/4 mx-auto gap-5 lg:grid-cols-3 md:grid-cols-2">
          <div className="card rounded-sm bg-base-100 shadow-xl">
            <img
              src="https://duruthemes.com/demo/html/ckarla/two/images/weddings/1.jpg"
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className="card-title font-normal head">
                Wedding in Barcelona Marine & Kevin
              </h2>
              <p className="text-gray-400">
                Mauris suscipit enec est aliqua a tincidunt eroculis. Proin
                suscipit risus eu ullamcorper faucibus...
              </p>
            </div>
          </div>

          <div className="card rounded-sm bg-base-100 shadow-xl">
            <img
              src="https://duruthemes.com/demo/html/ckarla/two/images/weddings/2.jpg"
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className="card-title font-normal head">
                Olivia and Enrico Wedding in Switzerland
              </h2>
              <p className="text-gray-400">
                Mauris suscipit enec est aliqua a tincidunt eroculis. Proin
                suscipit risus eu ullamcorper faucibus...
              </p>
            </div>
          </div>

          <div className="card rounded-sm bg-base-100 shadow-xl">
            <img
              src="https://duruthemes.com/demo/html/ckarla/two/images/weddings/3.jpg"
              alt="Shoes"
            />
            <div className="card-body">
              <h2 className="card-title font-normal head">
                Wedding in France Tammy & Matthew
              </h2>
              <p className="text-gray-400">
                Mauris suscipit enec est aliqua a tincidunt eroculis. Proin
                suscipit risus eu ullamcorper faucibus...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWeddings;
