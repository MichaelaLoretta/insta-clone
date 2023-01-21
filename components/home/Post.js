
import { View, Text, Image, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';



const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 30}}>
        <Divider width={1} orientation='vertical' />
        <Text>{post.user}</Text>

      
    </View>
  );
}

/* const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 5, 
    alignItems: 'center' }}>
        <View>
            <Text style={{ color: 'white'}}>USERNAME</Text>
        </View>
    </View>
) */

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 5,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    
    
      }
})

export default Post;
