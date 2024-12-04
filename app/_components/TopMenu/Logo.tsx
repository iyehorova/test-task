import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="d-flex justify-content-center align-items-center column-gap-2 col-md-3">
      <Image
        src="/icons/logo.svg"
        alt="logo"
        width={50}
        height={50}
        priority={false}
      />

      <span className="text-uppercase fw-semibold text-success fs-6">
        inventory
      </span>
    </div>
  );
};
