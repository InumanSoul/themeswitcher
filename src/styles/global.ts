import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
export default createGlobalStyle`
	/* Resets */
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: 'Muli', sans-serif;
	}

	body{
			background: ${(props) => props.theme.colors.background};
			font-size: 1rem;
			font-family: 'Muli', sans-serif;
			font-weight: 400;
			color: ${(props) => props.theme.colors.text};
			font-family: sans-serif;
	}

	h1{
			font-family: 'Muli', sans-serif;
			font-size: 2.2rem;
			font-weight: 800;
	}

	h2{
			font-family: 'Muli', sans-serif;
			font-size: 2rem;
			font-weight: 800;
	}

	h3{
			font-family: 'Muli', sans-serif;
			font-size: 1.75rem;
			font-weight: 800;
	}

	a{
			color: ${(props) => props.theme.colors.primary};
	}

	/* Body */
	.brand-mini {
		width: 28px;
		height: auto;
		margin-bottom: 10px;
		display: none;

		@media (min-width: 768px) {
			display: block;
		}
	}

	.brand-md {
		width: auto;
		height: 35px;
	}

	/* Helpers */
	.bg-light {
			background: ${(props) => props.theme.colors.cardbg};
	}

	.bg-primary {
			background: ${(props) => props.theme.colors.primary};;
	}

	.d-block {
			display: block;
	}

	.d-flex {
			display: flex;
	}

	.align-items-center{
			align-items: center;
	}

	.justify-content-center{
			justify-content: center;
	}

	.justify-content-between{
			justify-content: space-between;
	}

	.p4{
			padding: 1.2rem;
	}

	.mt4{
			margin-top: 1.2rem;
	}

	.mb4{
			margin-bottom: 1.2rem;
	}

	.mv4{
			margin-top: 1.2rem;
			margin-bottom: 1.2rem;
	}

	.ml3{
			margin-left: 1rem;
	}

	.mr3{
			margin-right: 1rem;
	}

	.ml2{
			margin-left: 0.65rem;
	}

	.mr2{
			margin-right: 0.65rem;
	}

	.mh2{
			margin-right: 0.65rem;
			margin-left: 0.65rem;

	}

	.float-right{
		float: right;
	}

	/* Text */

	.text-primary {
			color: ${(props) => props.theme.colors.primary};
	}

	.text-muted {
			color: ${(props) => props.theme.colors.text};
			opacity: 0.5;
	}

	.text-center {
			text-align: center;
	}

	.text-bold {
			font-weight: 600;
	}

	.text-reset{
			color: inherit!important;
	}

	.text-decoration-none {
			text-decoration: none !important;
	}

	.btn-block{
			width: 100%;
	}

	.shadow{
		box-shadow: 0 4px 8px ${(props) => props.theme.colors.shadows};
	}

	.rounded {
		border-radius: .45rem;
	}

	.dropdown-item{
		display: block;
		color: ${(props) => props.theme.colors.text};
		text-decoration: none;
		width: 100%;
		padding: .5rem 1.5rem;
		clear: both;
		font-weight: 400;
		text-align: inherit;
		white-space: nowrap;
		background-color: transparent;
		border: 0;
	}
		
	.row {
		box-sizing: border-box;
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex: 0 1 auto;
		-webkit-box-flex: 0;
		flex: 0 1 auto;
		-ms-flex-direction: row;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -1rem;
		margin-left: -1rem;
	}

	.row.reverse {
		-ms-flex-direction: row-reverse;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: reverse;
		flex-direction: row-reverse;
	}

	.col.reverse {
		-ms-flex-direction: column-reverse;
		-webkit-box-orient: vertical;
		-webkit-box-direction: reverse;
		flex-direction: column-reverse;
	}

	.col-xs,
	.col-xs-1,
	.col-xs-2,
	.col-xs-3,
	.col-xs-4,
	.col-xs-5,
	.col-xs-6,
	.col-xs-7,
	.col-xs-8,
	.col-xs-9,
	.col-xs-10,
	.col-xs-11,
	.col-xs-12 {
		box-sizing: border-box;
		-ms-flex: 0 0 auto;
		-webkit-box-flex: 0;
		flex: 0 0 auto;
		padding-right: 1rem;
		padding-left: 1rem;
	}

	.col-xs {
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		-webkit-box-flex: 1;
		flex-grow: 1;
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		max-width: 100%;
	}

	.col-xs-1 {
		-ms-flex-preferred-size: 8.333%;
		flex-basis: 8.333%;
		max-width: 8.333%;
	}

	.col-xs-2 {
		-ms-flex-preferred-size: 16.667%;
		flex-basis: 16.667%;
		max-width: 16.667%;
	}

	.col-xs-3 {
		-ms-flex-preferred-size: 25%;
		flex-basis: 25%;
		max-width: 25%;
	}

	.col-xs-4 {
		-ms-flex-preferred-size: 33.333%;
		flex-basis: 33.333%;
		max-width: 33.333%;
	}

	.col-xs-5 {
		-ms-flex-preferred-size: 41.667%;
		flex-basis: 41.667%;
		max-width: 41.667%;
	}

	.col-xs-6 {
		-ms-flex-preferred-size: 50%;
		flex-basis: 50%;
		max-width: 50%;
	}

	.col-xs-7 {
		-ms-flex-preferred-size: 58.333%;
		flex-basis: 58.333%;
		max-width: 58.333%;
	}

	.col-xs-8 {
		-ms-flex-preferred-size: 66.667%;
		flex-basis: 66.667%;
		max-width: 66.667%;
	}

	.col-xs-9 {
		-ms-flex-preferred-size: 75%;
		flex-basis: 75%;
		max-width: 75%;
	}

	.col-xs-10 {
		-ms-flex-preferred-size: 83.333%;
		flex-basis: 83.333%;
		max-width: 83.333%;
	}

	.col-xs-11 {
		-ms-flex-preferred-size: 91.667%;
		flex-basis: 91.667%;
		max-width: 91.667%;
	}

	.col-xs-12 {
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%;
		max-width: 100%;
	}

	.col-xs-offset-1 {
		margin-left: 8.333%;
	}

	.col-xs-offset-2 {
		margin-left: 16.667%;
	}

	.col-xs-offset-3 {
		margin-left: 25%;
	}

	.col-xs-offset-4 {
		margin-left: 33.333%;
	}

	.col-xs-offset-5 {
		margin-left: 41.667%;
	}

	.col-xs-offset-6 {
		margin-left: 50%;
	}

	.col-xs-offset-7 {
		margin-left: 58.333%;
	}

	.col-xs-offset-8 {
		margin-left: 66.667%;
	}

	.col-xs-offset-9 {
		margin-left: 75%;
	}

	.col-xs-offset-10 {
		margin-left: 83.333%;
	}

	.col-xs-offset-11 {
		margin-left: 91.667%;
	}

	.start-xs {
		-ms-flex-pack: start;
		-webkit-box-pack: start;
		justify-content: flex-start;
		text-align: start;
	}

	.center-xs {
		-ms-flex-pack: center;
		-webkit-box-pack: center;
		justify-content: center;
		text-align: center;
	}

	.end-xs {
		-ms-flex-pack: end;
		-webkit-box-pack: end;
		justify-content: flex-end;
		text-align: end;
	}

	.top-xs {
		-ms-flex-align: start;
		-webkit-box-align: start;
		align-items: flex-start;
	}

	.middle-xs {
		-ms-flex-align: center;
		-webkit-box-align: center;
		align-items: center;
	}

	.bottom-xs {
		-ms-flex-align: end;
		-webkit-box-align: end;
		align-items: flex-end;
	}

	.around-xs {
		-ms-flex-pack: distribute;
		justify-content: space-around;
	}

	.between-xs {
		-ms-flex-pack: justify;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}

	.first-xs {
		-ms-flex-order: -1;
		-webkit-box-ordinal-group: 0;
		order: -1;
	}

	.last-xs {
		-ms-flex-order: 1;
		-webkit-box-ordinal-group: 2;
		order: 1;
	}

	@media only screen and (min-width: 48em) {
		.container {
			width: 46rem;
		}

		.col-sm,
		.col-sm-1,
		.col-sm-2,
		.col-sm-3,
		.col-sm-4,
		.col-sm-5,
		.col-sm-6,
		.col-sm-7,
		.col-sm-8,
		.col-sm-9,
		.col-sm-10,
		.col-sm-11,
		.col-sm-12 {
			box-sizing: border-box;
			-ms-flex: 0 0 auto;
			-webkit-box-flex: 0;
			flex: 0 0 auto;
			padding-right: 1rem;
			padding-left: 1rem;
		}

		.col-sm {
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			-webkit-box-flex: 1;
			flex-grow: 1;
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			max-width: 100%;
		}

		.col-sm-1 {
			-ms-flex-preferred-size: 8.333%;
			flex-basis: 8.333%;
			max-width: 8.333%;
		}

		.col-sm-2 {
			-ms-flex-preferred-size: 16.667%;
			flex-basis: 16.667%;
			max-width: 16.667%;
		}

		.col-sm-3 {
			-ms-flex-preferred-size: 25%;
			flex-basis: 25%;
			max-width: 25%;
		}

		.col-sm-4 {
			-ms-flex-preferred-size: 33.333%;
			flex-basis: 33.333%;
			max-width: 33.333%;
		}

		.col-sm-5 {
			-ms-flex-preferred-size: 41.667%;
			flex-basis: 41.667%;
			max-width: 41.667%;
		}

		.col-sm-6 {
			-ms-flex-preferred-size: 50%;
			flex-basis: 50%;
			max-width: 50%;
		}

		.col-sm-7 {
			-ms-flex-preferred-size: 58.333%;
			flex-basis: 58.333%;
			max-width: 58.333%;
		}

		.col-sm-8 {
			-ms-flex-preferred-size: 66.667%;
			flex-basis: 66.667%;
			max-width: 66.667%;
		}

		.col-sm-9 {
			-ms-flex-preferred-size: 75%;
			flex-basis: 75%;
			max-width: 75%;
		}

		.col-sm-10 {
			-ms-flex-preferred-size: 83.333%;
			flex-basis: 83.333%;
			max-width: 83.333%;
		}

		.col-sm-11 {
			-ms-flex-preferred-size: 91.667%;
			flex-basis: 91.667%;
			max-width: 91.667%;
		}

		.col-sm-12 {
			-ms-flex-preferred-size: 100%;
			flex-basis: 100%;
			max-width: 100%;
		}

		.col-sm-offset-1 {
			margin-left: 8.333%;
		}

		.col-sm-offset-2 {
			margin-left: 16.667%;
		}

		.col-sm-offset-3 {
			margin-left: 25%;
		}

		.col-sm-offset-4 {
			margin-left: 33.333%;
		}

		.col-sm-offset-5 {
			margin-left: 41.667%;
		}

		.col-sm-offset-6 {
			margin-left: 50%;
		}

		.col-sm-offset-7 {
			margin-left: 58.333%;
		}

		.col-sm-offset-8 {
			margin-left: 66.667%;
		}

		.col-sm-offset-9 {
			margin-left: 75%;
		}

		.col-sm-offset-10 {
			margin-left: 83.333%;
		}

		.col-sm-offset-11 {
			margin-left: 91.667%;
		}

		.start-sm {
			-ms-flex-pack: start;
			-webkit-box-pack: start;
			justify-content: flex-start;
			text-align: start;
		}

		.center-sm {
			-ms-flex-pack: center;
			-webkit-box-pack: center;
			justify-content: center;
			text-align: center;
		}

		.end-sm {
			-ms-flex-pack: end;
			-webkit-box-pack: end;
			justify-content: flex-end;
			text-align: end;
		}

		.top-sm {
			-ms-flex-align: start;
			-webkit-box-align: start;
			align-items: flex-start;
		}

		.middle-sm {
			-ms-flex-align: center;
			-webkit-box-align: center;
			align-items: center;
		}

		.bottom-sm {
			-ms-flex-align: end;
			-webkit-box-align: end;
			align-items: flex-end;
		}

		.around-sm {
			-ms-flex-pack: distribute;
			justify-content: space-around;
		}

		.between-sm {
			-ms-flex-pack: justify;
			-webkit-box-pack: justify;
			justify-content: space-between;
		}

		.first-sm {
			-ms-flex-order: -1;
			-webkit-box-ordinal-group: 0;
			order: -1;
		}

		.last-sm {
			-ms-flex-order: 1;
			-webkit-box-ordinal-group: 2;
			order: 1;
		}
	}

	@media only screen and (min-width: 62em) {
		.col-md,
		.col-md-1,
		.col-md-2,
		.col-md-3,
		.col-md-4,
		.col-md-5,
		.col-md-6,
		.col-md-7,
		.col-md-8,
		.col-md-9,
		.col-md-10,
		.col-md-11,
		.col-md-12 {
			box-sizing: border-box;
			-ms-flex: 0 0 auto;
			-webkit-box-flex: 0;
			flex: 0 0 auto;
			padding-right: 1rem;
			padding-left: 1rem;
		}

		.col-md {
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			-webkit-box-flex: 1;
			flex-grow: 1;
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			max-width: 100%;
		}

		.col-md-1 {
			-ms-flex-preferred-size: 8.333%;
			flex-basis: 8.333%;
			max-width: 8.333%;
		}

		.col-md-2 {
			-ms-flex-preferred-size: 16.667%;
			flex-basis: 16.667%;
			max-width: 16.667%;
		}

		.col-md-3 {
			-ms-flex-preferred-size: 25%;
			flex-basis: 25%;
			max-width: 25%;
		}

		.col-md-4 {
			-ms-flex-preferred-size: 33.333%;
			flex-basis: 33.333%;
			max-width: 33.333%;
		}

		.col-md-5 {
			-ms-flex-preferred-size: 41.667%;
			flex-basis: 41.667%;
			max-width: 41.667%;
		}

		.col-md-6 {
			-ms-flex-preferred-size: 50%;
			flex-basis: 50%;
			max-width: 50%;
		}

		.col-md-7 {
			-ms-flex-preferred-size: 58.333%;
			flex-basis: 58.333%;
			max-width: 58.333%;
		}

		.col-md-8 {
			-ms-flex-preferred-size: 66.667%;
			flex-basis: 66.667%;
			max-width: 66.667%;
		}

		.col-md-9 {
			-ms-flex-preferred-size: 75%;
			flex-basis: 75%;
			max-width: 75%;
		}

		.col-md-10 {
			-ms-flex-preferred-size: 83.333%;
			flex-basis: 83.333%;
			max-width: 83.333%;
		}

		.col-md-11 {
			-ms-flex-preferred-size: 91.667%;
			flex-basis: 91.667%;
			max-width: 91.667%;
		}

		.col-md-12 {
			-ms-flex-preferred-size: 100%;
			flex-basis: 100%;
			max-width: 100%;
		}

		.col-md-offset-1 {
			margin-left: 8.333%;
		}

		.col-md-offset-2 {
			margin-left: 16.667%;
		}

		.col-md-offset-3 {
			margin-left: 25%;
		}

		.col-md-offset-4 {
			margin-left: 33.333%;
		}

		.col-md-offset-5 {
			margin-left: 41.667%;
		}

		.col-md-offset-6 {
			margin-left: 50%;
		}

		.col-md-offset-7 {
			margin-left: 58.333%;
		}

		.col-md-offset-8 {
			margin-left: 66.667%;
		}

		.col-md-offset-9 {
			margin-left: 75%;
		}

		.col-md-offset-10 {
			margin-left: 83.333%;
		}

		.col-md-offset-11 {
			margin-left: 91.667%;
		}

		.start-md {
			-ms-flex-pack: start;
			-webkit-box-pack: start;
			justify-content: flex-start;
			text-align: start;
		}

		.center-md {
			-ms-flex-pack: center;
			-webkit-box-pack: center;
			justify-content: center;
			text-align: center;
		}

		.end-md {
			-ms-flex-pack: end;
			-webkit-box-pack: end;
			justify-content: flex-end;
			text-align: end;
		}

		.top-md {
			-ms-flex-align: start;
			-webkit-box-align: start;
			align-items: flex-start;
		}

		.middle-md {
			-ms-flex-align: center;
			-webkit-box-align: center;
			align-items: center;
		}

		.bottom-md {
			-ms-flex-align: end;
			-webkit-box-align: end;
			align-items: flex-end;
		}

		.around-md {
			-ms-flex-pack: distribute;
			justify-content: space-around;
		}

		.between-md {
			-ms-flex-pack: justify;
			-webkit-box-pack: justify;
			justify-content: space-between;
		}

		.first-md {
			-ms-flex-order: -1;
			-webkit-box-ordinal-group: 0;
			order: -1;
		}

		.last-md {
			-ms-flex-order: 1;
			-webkit-box-ordinal-group: 2;
			order: 1;
		}
	}

	@media only screen and (min-width: 75em) {
		.col-lg,
		.col-lg-1,
		.col-lg-2,
		.col-lg-3,
		.col-lg-4,
		.col-lg-5,
		.col-lg-6,
		.col-lg-7,
		.col-lg-8,
		.col-lg-9,
		.col-lg-10,
		.col-lg-11,
		.col-lg-12 {
			box-sizing: border-box;
			-ms-flex: 0 0 auto;
			-webkit-box-flex: 0;
			flex: 0 0 auto;
			padding-right: 1rem;
			padding-left: 1rem;
		}

		.col-lg {
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			-webkit-box-flex: 1;
			flex-grow: 1;
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			max-width: 100%;
		}

		.col-lg-1 {
			-ms-flex-preferred-size: 8.333%;
			flex-basis: 8.333%;
			max-width: 8.333%;
		}

		.col-lg-2 {
			-ms-flex-preferred-size: 16.667%;
			flex-basis: 16.667%;
			max-width: 16.667%;
		}

		.col-lg-3 {
			-ms-flex-preferred-size: 25%;
			flex-basis: 25%;
			max-width: 25%;
		}

		.col-lg-4 {
			-ms-flex-preferred-size: 33.333%;
			flex-basis: 33.333%;
			max-width: 33.333%;
		}

		.col-lg-5 {
			-ms-flex-preferred-size: 41.667%;
			flex-basis: 41.667%;
			max-width: 41.667%;
		}

		.col-lg-6 {
			-ms-flex-preferred-size: 50%;
			flex-basis: 50%;
			max-width: 50%;
		}

		.col-lg-7 {
			-ms-flex-preferred-size: 58.333%;
			flex-basis: 58.333%;
			max-width: 58.333%;
		}

		.col-lg-8 {
			-ms-flex-preferred-size: 66.667%;
			flex-basis: 66.667%;
			max-width: 66.667%;
		}

		.col-lg-9 {
			-ms-flex-preferred-size: 75%;
			flex-basis: 75%;
			max-width: 75%;
		}

		.col-lg-10 {
			-ms-flex-preferred-size: 83.333%;
			flex-basis: 83.333%;
			max-width: 83.333%;
		}

		.col-lg-11 {
			-ms-flex-preferred-size: 91.667%;
			flex-basis: 91.667%;
			max-width: 91.667%;
		}

		.col-lg-12 {
			-ms-flex-preferred-size: 100%;
			flex-basis: 100%;
			max-width: 100%;
		}

		.col-lg-offset-1 {
			margin-left: 8.333%;
		}

		.col-lg-offset-2 {
			margin-left: 16.667%;
		}

		.col-lg-offset-3 {
			margin-left: 25%;
		}

		.col-lg-offset-4 {
			margin-left: 33.333%;
		}

		.col-lg-offset-5 {
			margin-left: 41.667%;
		}

		.col-lg-offset-6 {
			margin-left: 50%;
		}

		.col-lg-offset-7 {
			margin-left: 58.333%;
		}

		.col-lg-offset-8 {
			margin-left: 66.667%;
		}

		.col-lg-offset-9 {
			margin-left: 75%;
		}

		.col-lg-offset-10 {
			margin-left: 83.333%;
		}

		.col-lg-offset-11 {
			margin-left: 91.667%;
		}

		.start-lg {
			-ms-flex-pack: start;
			-webkit-box-pack: start;
			justify-content: flex-start;
			text-align: start;
		}

		.center-lg {
			-ms-flex-pack: center;
			-webkit-box-pack: center;
			justify-content: center;
			text-align: center;
		}

		.end-lg {
			-ms-flex-pack: end;
			-webkit-box-pack: end;
			justify-content: flex-end;
			text-align: end;
		}

		.top-lg {
			-ms-flex-align: start;
			-webkit-box-align: start;
			align-items: flex-start;
		}

		.middle-lg {
			-ms-flex-align: center;
			-webkit-box-align: center;
			align-items: center;
		}

		.bottom-lg {
			-ms-flex-align: end;
			-webkit-box-align: end;
			align-items: flex-end;
		}

		.around-lg {
			-ms-flex-pack: distribute;
			justify-content: space-around;
		}

		.between-lg {
			-ms-flex-pack: justify;
			-webkit-box-pack: justify;
			justify-content: space-between;
		}

		.first-lg {
			-ms-flex-order: -1;
			-webkit-box-ordinal-group: 0;
			order: -1;
		}

		.last-lg {
			-ms-flex-order: 1;
			-webkit-box-ordinal-group: 2;
			order: 1;
		}
	}
`;

export const Wrapper = styled.div`
	position: relative;
	top: 0;
	height: 100vh;
	display: flex;
`;

export const Content = styled.div`
	width: 100%;

	@media (min-width: 768px) {
		width: calc(100% - 210px);
	}
`;

export const Button = styled.button`
  padding: 0.375rem 0.75rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
  }
`;

export const SuccessButton = styled(Button)`
  background: ${(props) => props.theme.colors.success};
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  width: 90%;
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: 0.375rem .75rem;
  border-radius: .25rem;
  display: inline-block;
  width: 100%;
  height: 40px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;

  :active, :focus {
    outline: 0;
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export const Label = styled.label`
  margin-bottom: .375rem;
  font-weight: 600;
  font-size: 14px;
  display: block;
`;

export const DropdownMenu = styled.div`
	position: absolute;
	color: ${(props) => props.theme.colors.text};
	z-index: 1000;
	display: none;
	min-width: 10rem;
	padding: .5rem 0;
	font-size: 1rem;
	text-align: left;
	list-style: none;
	background-color: ${(props) => props.theme.colors.cardbg};
	background-clip: padding-box;
	box-shadow: 0 3px 13px ${(props) => props.theme.colors.shadows};
	border-radius: .25rem;
`;

export const DropdownMenuLeft = styled(DropdownMenu)`
	top: 100%;
  left: 0;
  float: right;
	margin: .375rem 0 0;
	
	::after{
		content: '';
    position: absolute;
    left: 10%;
    bottom: 100%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${(props) => props.theme.colors.cardbg};
    clear: both;
	}
`;

export const DropdownMenuRight = styled(DropdownMenu)`
	top: 100%;
	right: 0;
	float: right;
	margin: .375rem 0 0;
	
	::after{
		content: '';
    position: absolute;
    right: 10%;
    bottom: 100%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${(props) => props.theme.colors.cardbg};
    clear: both;
	}
`;

export const DropupMenu = styled(DropdownMenu)`
	bottom: 100%;
	margin-top: 0;
  margin-bottom: .375rem;

	::after{
		content: '';
    position: absolute;
    left: 10%;
    top: 100%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${(props) => props.theme.colors.cardbg};
    clear: both;
	}
`;

export const Dropdown = styled.div`
  position: relative;
	cursor: pointer;

  &:hover ${DropdownMenu} { 
		display: block;
	}

`;

export const DropdownHeader = styled.div`
  color: ${(props) => props.theme.colors.text};
`;