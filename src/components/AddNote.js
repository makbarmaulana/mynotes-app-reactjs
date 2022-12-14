import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MdArrowBack, MdNoteAdd } from "react-icons/md";
import PropTypes from 'prop-types';


class AddNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			limit: 30,
		};
	}


    onInputTitleHandler(e) {
		const limit = this.state.limit;

		if(e.target.value.length >= limit) {
			window.alert(`The title may not be longer than ${limit} characters.`)
		}

        this.setState({ title: e.target.value })
    }

    onInputBodyHandler(e) {
        this.setState({ body: e.target.innerHTML })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        this.props.onAddNote(this.state)
    }

	
	render() {
		return (
			<div className="AddNote">

				<Link className="nav-home-link" to={"/"}>
					<MdArrowBack />
				</Link>

				<form>
					<label className="title-label">Title</label>
					<input 
						className="add-input__title"
						value={this.state.title}
						onChange={this.onInputTitleHandler.bind(this)}
						maxLength={this.state.limit}
					/>

					<label className="body-label">Descriptions</label>
					<div
						className="add-input__body"
						type="text"
						data-placeholder="Add Descriptions..."
						value={this.state.body}
						onInput={this.onInputBodyHandler.bind(this)}
						contentEditable
					/>

					<Button
						type="submit"
						className="btn-submit-add"
						btnName={<MdNoteAdd />}
						onClickBtn={this.onSubmitHandler.bind(this)}
					/>
				</form>
				
			</div>
		);
	}
}


AddNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
	onAddNote: PropTypes.func.isRequired,
};

export default AddNote;
