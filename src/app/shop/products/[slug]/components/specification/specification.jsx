"use client";
import React from "react";

export default function Specification({ product }) {
  if (!product?.specifications) return null;

  const general = product.specifications.general || {};
  const technical = product.specifications.technical || {};

  // Format General Section
  const generalSpecs = [
    { label: "Weight", value: general.weight },
    { label: "Dimensions", value: general.dimensions },
    { label: "Display Size", value: general.size },
    {
      label: "Color Options",
      value: general.colorOptions?.join(", "),
    },
    { label: "Guarantee", value: general.guarantee },
  ];

  // Format Technical Section
  const technicalSpecs = [
    { label: "Brand", value: technical.brand },
    { label: "Model", value: technical.model },
    { label: "Processor Brand", value: technical.processor?.brand },
    { label: "Processor Type", value: technical.processor?.type },
    { label: "Processor Speed", value: technical.processor?.speed },
    { label: "RAM Size", value: technical.ram },
    { label: "Storage Size", value: technical.storage?.size },
    { label: "Storage Type", value: technical.storage?.type },
    { label: "Graphics Coprocessor", value: technical.graphics?.coprocessor },
    {
      label: "Graphics Card Description",
      value: technical.graphics?.cardDescription,
    },
    { label: "Screen Size", value: technical.display?.screenSize },
    { label: "Resolution", value: technical.display?.resolution },
    { label: "Rear Camera", value: technical.camera?.rear },
    { label: "Front Camera", value: technical.camera?.front },
    { label: "Operating System", value: technical.os },
  ];

  return (
    <div className="bg-white border- border-gray-200 rounded-b-2xl shadow-sm overflow-hidden">
      {/* ---- Header ---- */}
      <div className="border-b border-gray-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Technical Specifications
        </h2>
      </div>

      {/* ---- General Section ---- */}
      <div className="p-6">
        <h3 className="text-base font-semibold text-gray-700 mb-3">
          General Information
        </h3>
        <table className="w-full text-sm border border-gray-200">
          <tbody>
            {generalSpecs.map(
              (item, i) =>
                item.value && (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-2 px-4 font-medium text-gray-700 w-1/2">
                      {item.label}
                    </td>
                    <td className="py-2 px-4 text-gray-600 w-1/2">
                      {item.value}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

      {/* ---- Technical Section ---- */}
      <div className="px-6 pb-6">
        <h3 className="text-base font-semibold text-gray-700 mb-3">
          Technical Details
        </h3>
        <table className="w-full text-sm border border-gray-200">
          <tbody>
            {technicalSpecs.map(
              (item, i) =>
                item.value && (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-2 px-4 font-medium text-gray-700 w-1/2">
                      {item.label}
                    </td>
                    <td className="py-2 px-4 text-gray-600 w-1/2 text-right sm:text-left">
                      {item.value}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
