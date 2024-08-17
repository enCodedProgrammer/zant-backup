import StarIcon from "@/asset/icons/system/Star.svg"
import SaveButton from "@/components/button/save"
import Image from "next/image"
import { useRouter } from "next/router"
import { EffectCoverflow, Autoplay } from "swiper/modules"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

const photos = [
	"/assets/img/profile/user4.png",
	"/assets/img/profile/user5.png",
	"/assets/img/profile/user1.png",
	"/assets/img/profile/user2.png",
	"/assets/img/profile/user3.png",
]

export default function ExploreTab() {
	const router = useRouter()

	return (
		<section className="pb-10">
			<div className="mx-auto max-w-[112rem]">
				<Swiper
					modules={[EffectCoverflow, Autoplay]}
					effect={"coverflow"}
					loop={true}
					spaceBetween={56}
					slidesPerView={3}
					centeredSlides={true}
					grabCursor={true}
					coverflowEffect={{
						rotate: 0,
						slideShadows: false,
					}}
					className="coverflow"
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
				>
					{photos.map((p, index) => {
						return (
							<SwiperSlide
								key={index}
								className="!flex overflow-hidden !items-center !h-[50rem] rounded-2xl relative flex-col justify-between"
								onClick={(e) => {
									if ((e.target as HTMLElement).parentElement?.classList.contains("swiper-slide-active")) {
										router.push("/provider/profile/asdf")
									}
								}}
							>
								<img className="absolute h-full w-full self-stretch object-cover" src={p} alt="" />
                                <div className="z-50 w-full p-7">
                                    <SaveButton className="tz-md tz-tertiary inactive" />
                                </div>
                                <div className="z-50 flex w-full flex-col gap-5 p-7 text-white">
                                    <div className="font-medium text-heading-2xl">Jenna Johnson</div>
                                    <div className="flex items-center justify-between active">
                                        <div className="flex gap-4">
                                            <div className="text-lead-md !font-regular">Life Coach</div>
                                            <div className="flex items-center font-normal text-md">
                                                <Image src={StarIcon} alt="star" />
                                                4.92
                                            </div>
                                        </div>
                                        <SaveButton className="tz-md tz-tertiary active" />
                                    </div>
                                    <div className="text-md font-roboto inactive">
                                        75% match
                                    </div>
                                </div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}
