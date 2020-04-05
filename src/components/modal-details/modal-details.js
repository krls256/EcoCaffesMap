import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Link from './link';

const ModalDetails = ({set_false, crutchCurrentMarker:
  {name, address, schedule, instagram, facebook, link}}) => {
  return (
      <Modal animationType="slide"
             transparent
             style={style.modal}
      >
        <View style={style.wrapper}>
          <Text style={style.header}>
            {name}
          </Text>

          <Text style={style.section}>
            {address}
          </Text>

          <Text style={style.section}>
            {schedule}
          </Text>
          <Link url={instagram}
                name={'instagram'}/>
          <Link url={facebook}
                name={'facebook'}/>
          <Link url={link}
                name={'site'}/>


          <TouchableOpacity style={style.button}
                            onPress={set_false}>
            <Text style={style.button__text}>Назад</Text>
          </TouchableOpacity>
        </View>


      </Modal>
  )
};

const mapStateToProps = ({modalDetails, crutchCurrentMarker}) => ({modalDetails, crutchCurrentMarker});

export default connect(mapStateToProps, actions)(ModalDetails)

const style = StyleSheet.create({
  wrapper: {
    width: '80%',
    height: '80%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: '10%',
    marginLeft: '10%',
    borderRadius: 50
  },
  header: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 12,
    borderBottomWidth: 1,
    height: 30,
    width: '100%',
    paddingBottom: 8,
    lineHeight: 23,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    fontSize: 18
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: '10%',
    width: '80%',
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
  },
  button__text: {
    fontSize: 23,
    textTransform: 'uppercase'
  },
});
