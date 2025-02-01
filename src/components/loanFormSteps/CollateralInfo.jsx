import React from "react";
import { Form, Select, InputNumber, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;

function CollateralInfo({ form }) {
	const props = {
		name: "file",
		multiple: true,
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
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		},
	};

	return (
		<>
			<Form.Item
				name="assetType"
				label="Asset Type"
				rules={[{ required: true, message: "Please select the asset type!" }]}
			>
				<Select>
					<Option value="property">Property</Option>
					<Option value="vehicle">Vehicle</Option>
					<Option value="jewelry">Jewelry</Option>
					<Option value="other">Other</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="assetValue"
				label="Estimated Asset Value"
				rules={[
					{
						required: true,
						message: "Please input the estimated asset value!",
					},
				]}
			>
				<InputNumber
					style={{ width: "100%" }}
					formatter={(value) =>
						`PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
					parser={(value) => value.replace(/PKR\s?|(,*)/g, "")}
				/>
			</Form.Item>
			<Form.Item
				name="assetProof"
				label="Asset Ownership Proof"
				rules={[
					{
						required: true,
						message: "Please upload the asset ownership proof!",
					},
				]}
			>
				<Dragger {...props}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">
						Click or drag file to this area to upload
					</p>
					<p className="ant-upload-hint">
						Support for a single or bulk upload. Strictly prohibit from
						uploading company data or other sensitive files.
					</p>
				</Dragger>
			</Form.Item>
		</>
	);
}

export default CollateralInfo;
