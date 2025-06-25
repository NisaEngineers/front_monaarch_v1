// components/ServiceDetails.tsx
import Image from "next/image";
import servicesData from "../utils/servicesData";
import Link from "next/link";

interface ServiceDetailsProps {
  serviceId: string;
}

export default function ServiceDetails({ serviceId }: ServiceDetailsProps) {
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) return null;

  return (
    <div className="mt-10 flex flex-col items-center">
      <Image
        src={service.image}
        alt={service.name}
        width={200}
        height={200}
        className="rounded-lg shadow-lg"
      />
      <h3 className="mt-6 text-2xl text-white">{service.name}</h3>
      <p className="mt-4 max-w-md text-lg text-gray-300">{service.description}</p>
      <Link href={`/services/${service.id}`}>
        <button className="mt-6 px-8 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-md transition-transform duration-300 hover:scale-105">
          {`Use ${service.name}`}
        </button>
      </Link>
    </div>
  );
}
