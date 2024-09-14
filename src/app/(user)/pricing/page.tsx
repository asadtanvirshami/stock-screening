"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Pricing = (props: Props) => {
  const [selectedRegion, setSelectedRegion] = React.useState("");

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div className=" bg-gradient-to-r text-white from-black via-gray-800 to-black h-screen">
      {" "}
      <main className="p-4 container">
        <section className=" container rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">
            Select Your Investment Regions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="bg-transparent border-white border rounded-lg p-4"
              onClick={() => handleRegionClick("Developed Asia")}
            >
              <h3 className="text-xl font-bold mb-2">Developed Asia</h3>
              <ul className="list-disc pl-4">
                <li>7,500+ StockReports with StockRanks</li>
                <li>
                  Unlock all features, advanced tools, and expert resources.
                </li>
                <li>$145 saving compared with monthly billing</li>
              </ul>
              <p className="text-xl font-bold mt-4">$395/year</p>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                Start 14-Day Trial
              </button>
              <p className="text-gray-500 mt-2">Or skip trial and pay now</p>
            </div>
            <div
              className="bg-transparent border-white border rounded-lg p-4"
              onClick={() => handleRegionClick("US and Developed Asia")}
            >
              <h3 className="text-xl font-bold mb-2">US and Developed Asia</h3>
              <ul className="list-disc pl-4">
                <li>17,500+ StockReports with StockRanks</li>
                <li>
                  Unlock all features, advanced tools, and expert resources.
                </li>
                <li>$180 saving compared with monthly billing</li>
              </ul>
              <p className="text-xl font-bold mt-4">$600/year</p>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                Start 14-Day Trial
              </button>
              <p className="text-gray-500 mt-2">Or skip trial and pay now</p>
            </div>
            <div
              className="bg-transparent border-white border rounded-lg p-4"
              onClick={() => handleRegionClick("Customize")}
            >
              <h3 className="text-xl font-bold mb-2">Customize</h3>
              <ul className="list-disc pl-4">
                <li>Up to 35,000+ StockReports with StockRanks</li>
                <li>
                  Unlock all features, advanced tools, and expert resources.
                </li>
                <li>Receive a discount on 2 or more regions</li>
              </ul>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                Select Regions
              </button>
            </div>
          </div>
        </section>

        <section className="bg-transparent justify-center flex-col flex align-middle items-center  rounded-lg p-4 mt-4">
          <h3 className="text-xl font-bold mb-4">
            Not ready to take a trial? Get free insights to your inbox
          </h3>
          <p className="text-gray-500">
            {"Discover the best from Stockopedia's expert team of analysts as we"}
            share investment research, stock market commentary, and
            data-informed insights-direct to your inbox.
          </p>
          <Link
            href={"/auth/signup"}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
          >
            Sign Up
          </Link>
          <p className="text-gray-500 mt-2">$0 forever</p>
        </section>

        <section className="justify-center  flex-col flex align-middle items-center  rounded-lg p-4 mt-4">
          <div className="bg-blue-600 flex justify-center flex-col items-center rounded-lg  p-4 ">
            <h3 className="text-xl font-bold mb-4">
              Key points about your 14 day trial
            </h3>
            <ul className="list-disc pl-4">
              <li>{"You won't be charged for the trial"}</li>
              <li>You can cancel anytime</li>
              <li>{"You'll need a payment card"}</li>
            </ul>
            <p className="text-white mt-2">
              To verify your account, we just need a payment card to start your
              free trial. {"Don't worry, your card won't be charged"}.
            </p>
          </div>
        </section>
        {/* course event section  */}
        
      </main>
    </div>
  );
};

export default Pricing;
