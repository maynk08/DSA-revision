let nums = [1,2,3]


var swap = function(arr,index1,index2){
    [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
    }
    
    var reverse = function(arr,index1,index2){
        while(index1<index2){
            swap(arr,index1,index2)
            index1++
            index2--
        }
    }
    var nextPermutation = function(nums) {
        let i = nums.length - 2, j = nums.length - 1;
        while (i >= 0 && nums[i + 1] <= nums[i]) {
            i--;
        }
        if (i >= 0) {
            while (nums[j] <= nums[i]) {
                j--;
            }
            swap(nums, i, j);
        }
        i++;
        j = nums.length - 1;
        while (i < j) {
            swap(nums, i++, j--);
        }

        return nums
      };


      //nextPermutation(nums)
    console.log(nextPermutation(nums))