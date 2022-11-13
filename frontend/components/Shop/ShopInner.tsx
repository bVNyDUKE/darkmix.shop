import Image from "next/image";
import mainImg from "../../public/itemProba.webp";
import secImg from "../../public/product.jpg";
import Button from "../Button";
export default function ShopInner() {
  return (
    <>
      <div className="grid xl:grid-cols-3 gap-7 mt-7 md:grid-cols-2 grid-cols-1">
        {/* Primary Box */}
        <div className="md:col-span-2 xl:row-span-2 bg-white border border-secondary-light xl:h-[500px] p-9 lg:py-14">
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
                <Button label={"SHOP NOW"} href={"#"} aditClass="" icon="" />
              </div>
            </div>
            <div className=" order-1 md:order-2">
              <Image
                src={mainImg}
                alt="Picture of the author"
                width={315}
                height={400}
                className="w-full lg:h-[400px] h-[250px]  object-cover"
              />
            </div>
          </div>
        </div>

        {/* Secondary Boxes */}
        <div className="bg-white border border-secondary-light p-7">
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
                <Button label={"SHOP NOW"} href={"#"} aditClass="" icon="" />
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
        <div className="bg-white border border-secondary-light p-7">
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
                <Button label={"SHOP NOW"} href={"#"} aditClass="" icon="" />
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
