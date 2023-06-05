import { ArticleType } from '@/interfaces/article.interface';
import { Language } from '@/interfaces/constants.interfaces';
import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { ArticlePageComponent } from '@/page-component';
import { Articles } from '@/servises/article.service';
import { GetServerSideProps } from 'next';

function ArticlePage({ articles }: ArticlesPageProps) {
	console.log(articles);

	return (
		<Seo metaTitle='Articles'>
			<ArticlePageComponent articles={articles} />
		</Seo>
	);
}
export default withLayout(ArticlePage);

export const getServerSideProps: GetServerSideProps<ArticlesPageProps> = async ({ req }) => {
	const lng: Language = req.cookies.i18next as Language;
	const articles = await Articles.getArtciles(lng);
	return {
		props: {
			articles,
		},
	};
};

interface ArticlesPageProps extends Record<string, unknown> {
	articles: ArticleType[];
}
