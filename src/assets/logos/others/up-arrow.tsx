import React from "react";
type Props = {
  className: string;
};
const UpArrow = ({ className }: Props) => {
  return (
    <>
      <svg
        className={className}
        width="136mm"
        height="136mm"
        version="1.1"
        viewBox="0 0 136 136"
      >
        <path
          d="m61.573 135.41c-13.206-1.3648-25.026-6.0884-35.586-14.221-3.3202-2.5569-9.6036-8.9844-12.207-12.487-6.9672-9.3737-11.206-19.442-12.978-30.824-0.8256-5.3046-0.8256-14.539 0-19.844 2.2942-14.74 8.6748-27.307 19.217-37.85 5.8314-5.8314 10.914-9.4875 18.006-12.953 6.6811-3.2647 12.622-5.1402 19.844-6.2641 5.3106-0.82654 14.543-0.82578 19.844 0.0016431 14.756 2.3032 27.312 8.6775 37.85 19.216 5.8234 5.8234 9.4598 10.877 12.957 18.006 3.2397 6.6042 5.1345 12.61 6.2603 19.844 0.82561 5.3046 0.82561 14.539 0 19.844-2.2884 14.703-8.7015 27.334-19.217 37.85-10.501 10.501-23.305 17.007-37.768 19.19-4.0774 0.61551-12.542 0.87229-16.221 0.49208zm15.081-8.837c13.013-2.0424 24.9-8.2634 34.024-17.807 16.204-16.95 20.84-42.031 11.767-63.67-6.5631-15.653-19.838-27.985-35.869-33.321-18.626-6.1991-38.552-2.9357-54.504 8.9264-3.2175 2.3926-9.1264 8.2981-11.542 11.536-16.314 21.863-15.954 51.224 0.89065 72.599 1.9042 2.4163 7.0698 7.5829 9.4821 9.4837 8.8723 6.9914 19.572 11.375 30.803 12.62 3.117 0.34552 11.761 0.1332 14.949-0.3672zm-10.668-29.413c-0.48318-0.24635-1.1976-0.86615-1.5875-1.3773l-0.70898-0.92942-0.070848-21.04-0.070845-21.04-7.4698 7.4367c-8.0402 8.0047-8.112 8.0573-10.395 7.6291-1.25-0.23451-2.9404-1.9249-3.1749-3.1749-0.44435-2.3686-0.74936-1.9923 11.741-14.482 10.135-10.135 11.679-11.579 12.549-11.737 2.436-0.44188 2.0137-0.78287 14.534 11.737 12.49 12.49 12.185 12.114 11.741 14.482-0.2345 1.25-1.9249 2.9404-3.1749 3.1749-2.283 0.4283-2.3543 0.37598-10.4-7.6337l-7.4745-7.4414v20.719c0 23.016 0.09125 21.817-1.7682 23.235-1.152 0.87868-3.0309 1.0728-4.2697 0.44122z"
          strokeWidth=".26458"
        />
      </svg>
    </>
  );
};

export default UpArrow;
