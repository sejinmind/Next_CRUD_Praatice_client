const Routes = [
	{ pathname: '/', title: '메인화면', subTitle: '퀘스트내용' },
	{
		pathname: '/board',
		title: '게시글 리스트',
		subTitle: '누가 어떤 뻘글을 썼을까요?',
	},
	{
		pathname: '/board/show',
		title: '게시글 디테일',
		subTitle: '누가 이런 뻘글을 썼을까요?',
	},
	{
		pathname: '/board/create',
		title: '게시글 작성',
		subTitle: '어떤 뻘글을 작성해보는 당사자가 되볼래요?',
	},
	{
		pathname: '/board/show/',
		title: '글 수정',
		subTitle: '어떤글이었을까요..',
	},
	{
		pathname: '/signIn',
		title: '로그인',
		subTitle: '로그인해라',
	},
]

export { Routes }
