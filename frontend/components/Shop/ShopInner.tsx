import Image from "next/image";
import mainImg from "../../public/itemProba.webp";
import secImg from "../../public/product.jpg";
import Button from "../Button";
export default function ShopInner() {
  return (
    <>
      <div className="grid xl:grid-cols-3 gap-7 mt-7 md:grid-cols-2 grid-cols-1">
        {/* Primary Box */}
        <div className="md:col-span-2 xl:row-span-2 bg-white border border-secondary-light xl:h-[500px] md:p-9 px-4 py-8 lg:py-14">
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="grow flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-primary-dark text-3xl font-semibold">
                Shop Title Example
              </h2>
              <p className="text-secondary-dark text-lg max-w-xl my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sed leo placerat, elementum justo in, ornare libero. In suscipit
                luctus pharetra. Phasellus a tincidunt lectus
              </p>

              <div>
                <Button
                  label={"SHOP NOW"}
                  href={"/details/1"}
                  aditClass="bg-primary-dark"
                  icon=""
                />
              </div>
            </div>
            <div className=" order-1 md:order-2 relative">
              <Image
                src={mainImg}
                alt="Picture of the author"
                width={315}
                height={400}
                className="w-full lg:h-[400px] h-[250px]  object-cover"
              />
              <div className="absolute top-[-15px] right-0 w-20 h-20 text-2xl text-white font-semibold rounded-full bg-primary-light flex flex-col items-center justify-center">
                $300
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Boxes */}
        <div className="bg-white border border-secondary-light md:p-7 p-4">
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="basis-2/4 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-xl text-primary-dark font-semibold">
                  Shop Title Example
                </h3>
                <div className="text-xl font-semibold my-2.5 text-green-primary">
                  $300
                </div>
              </div>
              <div>
                <Button
                  label={"SHOP NOW"}
                  href={"/details/1"}
                  aditClass="bg-primary-dark"
                  icon=""
                />
              </div>
            </div>
            <div className="basis-2/4">
              <Image
                src={secImg}
                alt="Picture of the author"
                width={200}
                height={175}
                className="w-full h-[170px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white border border-secondary-light md:p-7 p-4">
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="basis-2/4 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-xl text-primary-dark font-semibold">
                  Shop Title Example
                </h3>
                <div className="text-xl font-semibold my-2.5 text-green-primary">
                  $300
                </div>
              </div>
              <div>
                <Button
                  label={"SHOP NOW"}
                  href={"/details/1"}
                  aditClass="bg-primary-dark"
                  icon=""
                />
              </div>
            </div>
            <div className="basis-2/4">
              <Image
                src={secImg}
                alt="Picture of the author"
                width={200}
                height={175}
                className="w-full h-[170px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
