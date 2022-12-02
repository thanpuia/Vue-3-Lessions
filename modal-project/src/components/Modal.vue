 <template>
 <div>
    <h2>{{header}}</h2>
    <h2>{{text}}</h2>

        <div class="backdrop">
            <div class="modal">
                <p>modal content</p>
                <h1>Deeper</h1>
            </div>
        </div>
</div>

 </template>
<script>
export default {
    
    props:['header','text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
    data(){}
}
</script>

<style>
    .modal {
        width : 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top:0;
        position: fixed;
        background: rgba(0, 0, 0, 5);
        width: 100%;
        height: 100%;
    }

    .modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;

    }
</style>
