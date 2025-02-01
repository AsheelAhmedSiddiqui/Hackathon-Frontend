import React from "react";
import { Form, Checkbox, Upload, DatePicker, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

function Declaration({ form }) {
	const props = {
		name: "file",
		multiple: false,
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};

	return (
		<>
			<Form.Item
				name="termsAgreed"
				valuePropName="checked"
				rules={[
					{
						validator: (_, value) =>
							value
								? Promise.resolve()
								: Promise.reject(
										new Error("You must agree to the terms and conditions")
								  ),
					},
				]}
			>
				<Checkbox>I have read and agree to the terms and conditions</Checkbox>
			</Form.Item>
			<Form.Item
				name="signature"
				label="Applicant Signature"
				rules={[{ required: true, message: "Please upload your signature!" }]}
			>
				<Dragger {...props}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">
						Click or drag file to this area to upload
					</p>
					<p className="ant-upload-hint">
						Please upload an image of your signature or a signed document.
					</p>
				</Dragger>
			</Form.Item>
			<Form.Item
				name="declarationDate"
				label="Date"
				rules={[{ required: true, message: "Please select the date!" }]}
			>
				<DatePicker style={{ width: "100%" }} />
			</Form.Item>
		</>
	);
}

export default Declaration;
