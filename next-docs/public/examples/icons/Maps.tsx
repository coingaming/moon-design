import {
  MapsCompass,
  MapsLocation,
  MapsMap,
  MapsMarker,
  MapsPanorama,
  MapsPin,
  MapsPinAdd,
  MapsPinLocation,
  MapsWorld,
} from '@heathmont/moon-icons-tw';
import Icon from './Icon';
import type Props from './Props';

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="MapsCompas">
      <MapsCompass {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsLocation">
      <MapsLocation {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsMap">
      <MapsMap {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsMarker">
      <MapsMarker {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsPanorama">
      <MapsPanorama {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsPin">
      <MapsPin {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsPinAdd">
      <MapsPinAdd {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsPinLocation">
      <MapsPinLocation {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MapsWorld">
      <MapsWorld {...props} />
    </Icon>
  </>
);

export default Example;
