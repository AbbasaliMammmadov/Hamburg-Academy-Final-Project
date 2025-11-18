import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FatBurningCard() {
  return (
    <div className="card flex justify-center">
      <div className="w-[90%] border-y border-[#FAFAFA]">
        {/* элемент */}
        <div className="flex items-center justify-between gap-6 text-white px-6 py-6">
          {/* левая часть */}
          <div className="flex items-center gap-6 flex-1 min-w-0">
            <div className="relative w-68 h-32 rounded-4xl overflow-hidden bg-neutral-800">
              <Image
                src="/fat-burning.png"
                alt="Fat Burning"
                fill
                className="object-cover cursor-pointer transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
            <div className="min-w-0 cursor-pointer">
              <h2 className="text-3xl font-bold mb-2 hover:text-[#D7FB00] transition-colors duration-300 ">Fat Burning</h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Lectus ac sed purus
                ultrices diam eu scelerisque. Eu ipsum curabitur ultricies id
                vel lacus.
              </p>
            </div>
          </div>

          <ArrowUpRight className="shrink-0 w-6 h-6 text-white cursor-pointer hover:text-[#FAFAFA] transition-colors" />
        </div>
      </div>
    </div>
  );
}
