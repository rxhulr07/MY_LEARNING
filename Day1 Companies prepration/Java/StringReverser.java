// public class string{

//     static void Revrse( String s){


//         for(int i =s.length()-1; i>=0; i--){
//             System.out.print(s.charAt(i));
//         }
//     }
//     public static void main(String[] args) {

//         string sc = new string();
//         sc.Revrse("cognizant");
        
//     }
// }

public class StringReverser {

    public static void main(String[] args) {
        String s = "cognizant";
        
        // Using StringBuilder to reverse
        String reversed = new StringBuilder(s).reverse().toString();
        
        System.out.println(reversed);
    }
}