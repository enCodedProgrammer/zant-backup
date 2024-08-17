import Button from "@/components/button"
import AvatarCard from "@/components/card/avatar"
import { Post, PostDocument } from "@/generated/graphql"
import { client, ssrCache } from "@/lib/urql"
import { GetStaticPaths, GetStaticProps } from "next"
import CaretLeft from "@/asset/icons/system/CaretLeft.svg"
import GenericIconButton from "@/components/button/genericIcon"
import SaveButton from "@/components/button/save"
import { useRouter } from "next/router"

export default function Post({ post }: { post: Post }) {
	const router = useRouter()

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between p-8">
				<GenericIconButton icon={CaretLeft} onClick={() => router.back()} />
				<SaveButton className="tz-tertiary" />
			</div>
			<div className="mx-auto flex max-w-4xl flex-col gap-20 p-4">
				<div className="flex flex-col gap-10">
					<h1 className="break-all font-medium text-display-xs">{post.title}</h1>
					<p className="text-center text-[#898A8D] font-neue tracking-wider">
						{post.title}
					</p>
				</div>
				<img
					className="rounded-lg"
					src={post.coverImage?.url}
					alt={post.coverImage?.altText!}
				/>
				<article
					className="prose"
					style={{ all: "unset" }}
					dangerouslySetInnerHTML={{ __html: post.content.html }}
				></article>

				<div className="flex flex-col gap-7 py-5">
					<h3 className="font-medium text-heading-sm">Meet the Author</h3>
					<div className="mt-4 grid grid-cols-3">
						<AvatarCard
							className="max-w-[18rem]"
							url={post.author?.avatar?.url!}
							name={post.author?.name!}
							title={post.author?.title!}
							available={false}
							profile={true}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = await client.query(PostDocument, { slug: params!.slug }).toPromise()

	return {
		props: {
			urqlState: ssrCache.extractData(),
			post: data.data?.post,
		},
		revalidate: 60 * 60 * 4, // 4 hours
	}
}

Post.plainLayout = true
