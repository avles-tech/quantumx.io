import React from 'react';
import CheckOrNotIcon from '../CheckOrNotIcon';
import UpdateGeoLocation from './UpdateGeoLocation';
import Table from '../Table';

// Assuming this is the shape of your geolocation data
interface GeoLocation {
  _id: string;
  latitude: number;
  longitude: number;
  active: boolean;
}

interface GeoLocationsTableProps {
  data: GeoLocation[];
  alertItemDeletedInfo: () => void;
  alertItemUpdatedInfo: () => void;
  setReload: () => void;
}

const GeoLocationsTable: React.FC<GeoLocationsTableProps> = ({
  data,
  alertItemDeletedInfo,
  alertItemUpdatedInfo,
  setReload,
}) => {
  const columns = [
    {
      key: 'latitude',
      label: 'Latitude',
    },
    {
      key: 'longitude',
      label: 'Longitude',
    },
    {
      key: 'active',
      label: 'Active',
      render: (value: boolean) => <CheckOrNotIcon value={value} />,
    },
    {
      key: '_id',
      label: 'Edit',
      render: (_: any, item: GeoLocation) => (
        <UpdateGeoLocation
          geoLocation={item}
          alertItemDeletedInfo={alertItemDeletedInfo}
          alertItemUpdatedInfo={alertItemUpdatedInfo}
          setReload={setReload}
        />
      ),
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default GeoLocationsTable;
