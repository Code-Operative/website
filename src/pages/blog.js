import React from 'react';
import BlogNav from '../components/Blog/BlogNav';
import BlogHeader from '../components/Blog/blogheader';
import BlogPreview from '../components/Blog/BlogPreview';
import Layout from '../components/Layout/layout';

export default function MemberPage() {

	return (
		<Layout>
			<BlogNav />
			<BlogHeader />
			<BlogPreview />
		</Layout>
	);
};