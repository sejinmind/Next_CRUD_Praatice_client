import * as React from 'react'
import { Input } from 'antd'
import styled from '@emotion/styled'
import { SearchOutlined } from '@ant-design/icons'

/*
@props 
  -> placeholder : 말그대로
  -> data : type<Array> 
  -> setData : data를 변경시켜줄수있는 callBack Function
*/
export default function Search(props) {
	const [text, setText] = React.useState('')
	const onFinish = () => {
		const { data, setData } = props
		if (text === '') {
			setData({ data })
		} else {
			setData({ data: data.filter((list) => list.title.includes(text)) })
		}
	}
	const onChange = (e) => {
		setText(e.target.value)
	}
	return (
		<SearchContainer backgroundColor={props.backgroundColor}>
			<Input
				placeholder={props.placeholder ? props.placeholder : '검색해주세요'}
				bordered={false}
				onChange={onChange}
				addonAfter={<SearchOutlined onClick={onFinish} />}
			/>
		</SearchContainer>
	)
}

const SearchContainer = styled.div`
	margin: 10px 0;
	padding: 10px 0;
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};

	.ant-input-group-addon {
		font-weight: 700;
		background-color: white;
		border: none;
		cursor: pointer;
		.anticon,
		.anticon-search {
			font-weight: 700;
		}
	}
`
