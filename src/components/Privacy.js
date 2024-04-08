"use client";
function PrivacyText({ info }) {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: info?.description,
      }}
    ></p>
  );
}

export default PrivacyText;
