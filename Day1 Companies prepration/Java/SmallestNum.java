 public class SmallestNum {
 
    public static int Smallestnum(int [] arr){

        int min = Integer.MAX_VALUE;

        for(int i =0; i<arr.length; i++){

            if(arr[i]<min){
                min = arr[i];
            }
        }
        return min;
    }

    public static void main(String[] args) {
        
        int [] arr = {5,4,3,2,1};

        System.out.println("Smallest number in the array is: " + Smallestnum(arr));
    }
 }